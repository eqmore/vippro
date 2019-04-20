

class MVVM{
    constructor({el,data}){
      this.$el=el;
      this.$data=data;
      if(this.$el){
          new Observe(this.$data);
          new Compile(this.$el,this);
      }
    }
    
}