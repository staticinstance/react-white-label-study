let createNamespace = function(fromString){
  var split = fromString.split('.');
  var parent = window;
  var current = '';
  var length = split.length;

  for(var i = 0; i < length; i++){
      current = split[i];
      parent[current] = parent[current] || {};
      parent = parent[current];
    }
}

export {
  createNamespace
}
