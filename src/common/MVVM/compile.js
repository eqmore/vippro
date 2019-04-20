class Compile{
    constructor(el,vm){
        this.el =document.querySelector(el);
        this.vm = vm;
        if(this.el){
            //先把真实的dom移入内存 fragment
            let fragment = this.node2fragment(this.el);
            //编译 提取想要的元素节点 文本节点
            this.compileTemplate(fragment);
            //把编译好的fragment塞回页面
            Array.from(fragment.childNodes).forEach(node=>{
                this.el.appendChild(node);
            })
        }
    }
    isElementNode(node){
        return node.nodeType === 1;
    }
    node2fragment(el){
        let fragment = document.createDocumentFragment();
        // console.log(el.childNodes)
        /* el.childNodes.forEach((node)=>{//动态node，隔一个移一个
            console.log(node.nodeType,1);
            fragment.appendChild(node);//appendchild
        }) */ 
        let firstChild = el.firstChild;
        while(firstChild = el.firstChild){
            fragment.appendChild(firstChild);
        }
        return fragment;
    }
    //compile
    compileTemplate(fragment){
        Array.from(fragment.childNodes).forEach(node=>{
            if(this.isElementNode(node)){
                this.compileElement(node);
            }
            else{
                this.compileText(node);
            }
            this.compileTemplate(node);
        })
    }
    
    complileMethods={
        setVal(vm,expr,value){
            let exp = expr.split('.');
            let x = exp.reduce((prev,next,index)=>{
                if(index === exp.length-1){
                    prev[next]= value;
                }
                return prev[next];
            },vm.$data)
            // console.log(x,value)
            x = value;
        },
        model(node,expr,vm){
            let value = this.handleExpr(expr,vm.$data);
            let updateFn = this.updater.modelUpdater;
            console.log('model'+expr);
            new Watcher(vm,expr,(newv)=>{
                updateFn && updateFn(node,newv);
            })
            node.addEventListener('input',(e)=>{
                let newvalue = e.target.value;
                this.setVal(vm,expr,newvalue);
            })
            updateFn && updateFn(node,value);
        },
        
        text(node,expr,vm){
            let textContent = node.textContent;
            let value =node.textContent.replace(expr,(p1,p2)=>{
                return this.handleExpr(p2,vm.$data);
            });
            let updateFn = this.updater.textUpdater;
            node.textContent.replace(expr,(p1,p2)=>{
                console.log('text'+p2)//表达式添加watcher new watcher时调用get get中Dep.target添加watcher, 调用observerget ，调用dep.addsubs
                new Watcher(vm,p2,()=>{
                    // console.log('watcher',textContent,expr)
                    let newv = textContent.replace(expr,(p1,p2,index)=>{
                        // console.log(expr,p2,index);
                        return this.handleExpr(p2,vm.$data);
                    });
                    updateFn && updateFn(node,newv);
                })
                
            });
            
            updateFn && updateFn(node,value);
        },
        
        updater:{
            textUpdater(node,value){
                node.textContent = value;
            },
            modelUpdater(node,value){
                node.value = value;
            }
        },
        //message.a.b
        handleExpr(p,data){
                
            let expr = p.split('.');
            return expr.reduce((prev,curr)=>{
                return prev[curr];
            },data)
        }
    }
    
    compileElement(node){
        Array.from(node.attributes).forEach(attr=>{//attributes
            let nodeName = attr.nodeName
            if(nodeName.includes('v-')){
                let directive = nodeName.split('-')[1];
                // console.log(directive)
                this.complileMethods[directive](node,attr.nodeValue,this.vm);
            }
        })
    }
    
    compileText(node){
        let expr = /\{\{([^}]+)\}\}/g;
        this.complileMethods["text"](node,expr,this.vm);
        
    }
}