import { createRouter, createWebHistory } from 'vue-router';
import AppView from '../views/appHome.vue';
import AboutView from '../views/AboutView.vue';
import VehichlesView from '../vehicles.vue';
import Reservation from '../views/ReservationPage.vue';
import profileCar from '../views/profileCar.vue';
import UploadImg from '../views/uploadImg.vue';
import profileUser from '../views/profileUser.vue';
import finelStep from '../views/finelStep.vue';
import signUp from '../views/SignUp.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'About' },
  },
  {
    path: '/vehichles',
    name: 'vehichles',
    component: VehichlesView,
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: Reservation,
  },
  {
    path: '/profileVehicle/:id',
    name: 'profileCar',
    component: profileCar,
  },
  {
    path: '/uploadImg',
    name: 'updateImg',
    component: UploadImg,
  },
  {
    path: '/profileUser',
    name: 'profileUser',
    component: profileUser,
    meta: { title: 'Profile' },
  },
  {
    path: '/finelStep',
    name: 'finelStep',
    component: finelStep,
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: signUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
