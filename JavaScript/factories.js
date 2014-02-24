/**
 * Created by YeongminCha on 2014. 2. 23..
 */
var portAppFactories = angular.module( 'portApp.Factories', [] );

portAppFactories.factory( 'IndexFactory', [function(){
    this.init = function(){
        this.source = "http://ozarker.org/wp-content/uploads/2013/12/ilb.jpg ";
        this.flag = false;
        this.context = { flag: this.flag, source: this.source };
    }

    this.init();

    return this;
}] );
