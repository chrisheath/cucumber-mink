///////////////////

var Routes = module.exports = {};

///////////////////

function postWithId (id) {
  return {
    id: id,
    title: 'Post-' + id,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  };
}

function postsGen (n) {
  var data = [];
  for (var i = 1; i < n + 1; i++) {
    data.push(postWithId(i));
  }
  return data;
}

///////////////////

Routes.responsive = function(request, reply) {
  reply.view('responsive');
};

Routes.index = function(request, reply){
  reply.view('index', {'posts': postsGen(3)});
};

Routes.generate = function(request, reply){
  var number = parseInt(encodeURIComponent(request.params.number));
  reply.view('index', {'posts': postsGen(number)});
};

Routes.post = function(request, reply) {
  var id = encodeURIComponent(request.params.id);
  reply.view('post', {'post': postWithId(id)});
};

Routes.form = function(request, reply) {
  reply.view('form', {});
};

Routes.result = function(request, reply) {
  request.payload.cb = !!request.payload.cb;

  reply.view('result', {
    'request': request.payload
  });
};