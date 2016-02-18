require(['store','backbone'],function(store,Backbone){
	var Index = Backbone.View.extend({
		initialize: function(){
			var data = store.get('list');
			if (data) {
				dataList = data;
			}else{
				dataList = [];
			}
			this.displayList(dataList);
		},
		el: 'body',
		events: {
			'click button[type=button]' : 'addList',
			'click #delete' : 'delteItem',
		},
		addList: function(event){
			event.preventDefault();
			var data = store.get('list');
			if (data) {
				dataList = data;
			}else{
				dataList = [];
			}
			var thisValue = $('input').val();
			if ($.trim(thisValue)) {
				$('input').val('');
				dataList.push(thisValue);
				store.set('list',dataList);
				var _template = _.template($('#J_list').html());
				$('#personList').html('').append(_template(store.get('list')));
			}
		},
		displayList: function(data){
			var _template = _.template($('#J_list').html());
			$('#personList').html('').append(_template(data));
		},
		delteItem: function(event){
			event.preventDefault();
			var value = $(event.target).siblings('font').text();
			var newList = _.without(store.get('list'), value);
			store.set('list',newList);
			var _template = _.template($('#J_list').html());
			$('#personList').html('').append(_template(store.get('list')));
		}
	});
	var index = new Index();
})