// import Home from '../components/Home/HomeContent.vue'
// import Message from '../components/Message/MessageContent.vue'
// import StudyHistory from '../components/Article/StudyHistory.vue'
// import HappyContent from '../components/Happy/HappyContent.vue'
// const routes = [
//     {
//         path:'/',
//         redirect:'/home'
//     },
//     {
//         name:'Home',
//         path:'/home',
//         component: Home
//     },
//     {
//         name:'Message',
//         path:'/message',
//         component: Message
//     },
//     // 文章
//     {
//         name:'StudyHistory',
//         path:'/studyHistory',
//         component: StudyHistory
//     },
//     // 娱乐
//     {
//         name:'HappyContent',
//         path:'/happy',
//         component: HappyContent
//     }
// ]

import Home from '../view/Home.vue'
import Message from '../view/Message.vue'
import Study from '../view/Articles/Study.vue'
import Happy from '../view/Happy.vue'
import Mother from '../view/Mother.vue'

const routes =[
    {path:'/',redirect:'/home'},
    {path:'/home',name:'Home',component:Home},
    {path:'/message',name:'Message',component:Message},
    {path:'/study',name:'Study',component:Study},
    {path:'/happy',name:'Happy',component:Happy},
    {path:'/mother',name:'Mother',component:Mother},
]

export default routes