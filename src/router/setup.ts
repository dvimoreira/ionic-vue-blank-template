import Unauthenticated from '../layouts/Unauthenticated.vue'

const route = [
    {
        path: '',
        redirect: '/setup/welcome',
    },
    {
        path: '/setup/',
        redirect: '/setup/welcome',
        component: Unauthenticated,
        children: [
            {
              path: 'welcome',
              component: () => import('@/views/Setup/Welcome.vue')
            },
        ]
    }
]

export default route