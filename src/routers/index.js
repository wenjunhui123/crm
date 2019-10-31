import Vue from 'vue';
import vueRouter from 'vue-router';
import Customer from '../pages/Customer';
import System from '../pages/System';
import CustomerList from '../pages/Customer/CustomerList';
import CustomerAll from '../pages/Customer/CustomerAll';
import CustomerHandle from '../pages/Customer/CustomerHandle';
import DepartHandle from '../pages/System/DepartHandle';
import DepartList from '../pages/System/DepartList';
import UserHandle from '../pages/System/UserHandle';
import UserList from '../pages/System/UserList';

Vue.use(vueRouter)

export default new vueRouter({
routes: [{
        path: '/',
        redirect: '/customer'
    },
    {
        path: '/customer',
        component: Customer,
        children: [{
            path: '',
            redirect: {
                path: '/customer/list',
                query: {
                    lx: 'my'
                }
            }
        }, {
            path: '/customer/list',
            name: 'customerList',
            component: CustomerList
        }, {
            path: '/customer/all',
            name: 'customerAll',
            component: CustomerAll
        },{
            path: '/customer/handle',
            name: 'customerHandle',
            component: CustomerHandle
        }]
    },
    {
        path: '/system',
        name:'system',
        component: System,
        children:[
           {
             path:'',
             redirect: '/system/userlist'
           },{
            path:'/system/userlist',
            name:'userList',
            component:UserList
           },{
            path:'/system/userhandle',
            name:'userHandle',
            component:UserHandle
           },{
            path:'/system/departhandle',
            name:'departHandle',
            component:DepartHandle
           },{
            path:'/system/departlist',
            name:'userList',
            component:DepartList 
           } 
        ]
        }, {
        path: '*',
        redirect: '/customer'
        }
]
})