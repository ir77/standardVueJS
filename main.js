var app13 = new Vue({
    el: '#section13',
    data: {
        message: 'section13',
    },
    methods: {
        handleClick: function() {
            alert('clicked!!!')
        }
    }
})

var app12 = new Vue({
    el: '#section12',
    data: {
        message: 'section12',
    },
})

var app11 = new Vue({
    el: '#section11',
    data: {
        message: 'section11',
    },
    mounted: function() {
        console.log(this.$el);
        console.log(this.$refs.hello);
    }
})

var app10 = new Vue({
    el: '#section10',
    data: {
        message: 'section10',
        list: [
            { id: 1, name: 'スライム1', hp: 100},
            { id: 2, name: 'スライム2', hp: 101},
            { id: 3, name: 'スライム3', hp: 301},
        ],
        list2: []
    },
    // created: function() {
    //     axios.get('list.json').then(function(response) {
    //         this.list2 = response.data
    //     }.bind(this)).catch(function(e) {
    //         console.log(e);
    //     })
    // }

})

var app4 = new Vue({
    el: '#section9',
    data: {
        message: 'section9',
        ok: false
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
