// Generated by LiveScript 1.5.0
(function(){
  var observer, observable, react, pages, whitebox, getContainer;
  observer = require('mobx-react').observer;
  observable = require('mobx').observable;
  react = require('react');
  pages = require('./pages.ls');
  whitebox = require('whitebox');
  getContainer = whitebox.getContainer;
  module.exports = function(arg$){
    var store, reload, selectPage, currentPage, onConfirm, children;
    store = arg$.store, reload = arg$.reload;
    if (store == null) {
      return null;
    }
    selectPage = curry$(function(page, event){
      return store.current.page = page;
    });
    importAll$(window, {
      store: store
    });
    currentPage = pages[store.current.page];
    onConfirm = curry$(function(_, event){
      return console.log('confirm');
    });
    return react.createElement('div', {
      className: 'app app893529543'
    }, children = currentPage({
      store: store
    }));
  };
  function curry$(f, bound){
    var context,
    _curry = function(args) {
      return f.length > 1 ? function(){
        var params = args ? args.concat() : [];
        context = bound ? context || this : this;
        return params.push.apply(params, arguments) <
            f.length && arguments.length ?
          _curry.call(context, params) : f.apply(context, params);
      } : f;
    };
    return _curry();
  }
  function importAll$(obj, src){
    for (var key in src) obj[key] = src[key];
    return obj;
  }
}).call(this);