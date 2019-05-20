var app3 = new Vue({
    el: '#section8',
    data: {
        message: 'section8',
        count: 0
    },
    methods: {
        increment: function() {
            this.count += 1
        }
    }
})
var app2 = new Vue({
    el: '#section6',
    data: {
        message: 'Hello!!!',
    },
    methods: {
    },
    computed: {
        computedMessage: function() {
            return this.message + '!'
        }
    },
    created: function() {
        console.log('created');
    }
})

var app = new Vue({
    el: '#section5',
    data: {
        message: 'Hello!!!',
        list: ['りんご', 'みかん', 'めろん'],
        show: true
    },
    methods: {
        handleClick: function(event) {
            alert(event.target)
        }
    }
})
