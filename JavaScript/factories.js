/**
 * Created by YeongminCha on 2014. 2. 23..
 */
var portAppFactories = angular.module( 'portApp.Factories', [] );

portAppFactories.factory( 'UserFactory', [function(){
    this.isLogged = function(){
        return this.logContext.flag;
    }

    this.login = function( id ){
        var position = this.getUserPosition( id );
        this.logContext.user.id = this.userList[position].id;
        this.logContext.user.name = this.userList[position].name;
        this.logContext.flag = true;
    }

    this.logOut = function(){
        this.logContext.flag = false;
    }

    this.getTempUser = function(){
        var tempUser = { id: this.number, name: "name" + this.number };
        this.number++;
        return tempUser;
    }

    this.addUser = function( user ){
        this.userList.push( user );
    }

    this.modifyUser = function( id, user ){
        var position = this.getUserPosition( id );
        if( position !== -1 ) this.userList[position] = user;
    }

    this.removeUser = function( id ){
        var position = this.getUserPosition( id );
        if( position !== -1 ) this.userList.splice( position, 1 );
    }

    this.getUserPosition = function( id ){
        for( var i = 0; i < this.userList.length; i++ ){
            if( this.userList[i].id === id ) return i;
        }
        return -1;
    }

    this.appendTempUser = function(){
        var user = this.getTempUser();
        this.addUser( user );
    }

    this.makeDummyUser = function( count ){
        for( var i = 0; i < count; i++ ){
            this.appendTempUser();
        }
    }

    this.init = function(){
        this.userList = [];
        this.number = 0;
        this.logContext = { flag: false, user: this.getTempUser() };
        this.makeDummyUser( 10 );
    }

    this.init();

    return this;
}] );
