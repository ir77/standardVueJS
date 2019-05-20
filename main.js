var app4 = new Vue({
    el: '#section9',
    data: {
        message: 'section9',
    }
})

var app3 = new Vue({
    el: '#section8',
    data: {
        message: 'section8',
        count: 0,
        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',

        classObject: {
            child: true,
            'is-active': true,
        },
        styleObject: {
            color: 'red',
            backgroundColor: 'lightgray',
        },

        radius: 50
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
