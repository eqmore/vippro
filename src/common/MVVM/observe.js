
let dep;
class Observe{
    constructor(data){
        this.observe(data);
        console.log(data);
    }
    observe(data){
        let that = this;
        if(!data || Object.prototype.toString.call(data)!=='[object Object]'){
            return ;
        }
        dep = new Dep();
        for(let key in data){
            // console.log(Object.hasOwnProperty(key));
            if(data.hasOwnProperty(key)){//不是Object.hasOwnProperty
                let value=data[key];
                // console.log(value);
                Object.defineProperty(data,key,{
                    enumerable:true,
                    configurable:true,
                    get(){
                        debugger;//observe
                        Dep.target && dep.addSubs(Dep.target);
                        return value;
                    },
                    set(newvalue){
                        if(newvalue!= value){
                            // console.log(this);//vm.$data.message ={b:1} 此时this 是vm.$data
                            
                            that.observe(newvalue);
                            value = newvalue;
                            dep.notify();
                        }
                    }
                })
                this.observe(data[key]);
            }
        }
    }

}
let j=0;
class Dep{
    constructor(){
        this.subs =[];
    }
    addSubs(watcher){
        console.log('add'+j++);
        this.subs.push(watcher);
    }
    notify(){
        this.subs.forEach(watcher=>watcher.update());
    }
}