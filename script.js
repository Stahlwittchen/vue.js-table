Vue.component("tag", {
    template:
        '\
            <div class="list__item">\
                <div class="icon"></div>\
                <div class="text" v-on:click="rewriteTitle">\
                  <span class="load-num">{{ title }} \
                    <i class="fa fa-pencil" aria-hidden="true"></i>\
                  </span>\
                </div>\
                <div class="actions">\
                  <span class="actions__item actions__item-first">\
                    <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>\
                  </span>\
                  <span class="actions__item actions__item-second" v-on:click="remove">\
                    <i class="fa fa-trash" aria-hidden="true"></i>\
                  </span>\
                </div>\
        </div>\
      ',
    props: ["title", "todo"],
    methods: {
        rewriteTitle: function() {
            var switchToInput = function() {
                var $input = $("<input>", {
                    val: $(this).text(),
                    class: "load-num",
                    type: "text"
                });
                $(this).replaceWith($input);
                $input.on("blur", switchToSpan);
                $input.select();
            };
            var switchToSpan = function() {
                var $span = $("<span>", {
                    text: $(this).val(),
                    class: "load-num"
                });
                $(this).replaceWith($span);
                $span.on("click", switchToInput);
            };
            $(".load-num").on("click", switchToInput);
        },
        remove() {
            this.$emit('remove');
        }
    }
});
Vue.component('modal', {
    template: '#modal-template'
});
new Vue({
    el: "#app",
    data: {
        newTodoText: "",
        showModal: false,
        todos: [
            {
                id: 1,
                title: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                id: 2,
                title: "Praesentium reprehenderit veniam quis nam accusamus architecto, quo modi totam amet voluptas exercitationem!"
            },
            {
                id: 3,
                title: "Omnis labore nihil dolorem possimus corporis commodi officiis minus."
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function() {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            });
            this.newTodoText = "";
        },
        removeRow(index){
            this.todos.splice(index,1);
        }
    }
});