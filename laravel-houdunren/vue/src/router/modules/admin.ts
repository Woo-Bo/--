import { DashboardOne, DocDetail, ImageFiles, AddFour } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'
import adminLayout from '@/layouts/admin/index.vue'
import adminIndex from '@/views/admin/index.vue'
import animateListVue from '@/views/admin/animateList.vue'
import utilVue from '@/views/admin/util.vue'
import wangeditorVue from '@/views/admin/wangeditor.vue'
import markdownVue from '@/views/admin/markdown.vue'

export default [
  {
    path: '/admin',
    component: adminLayout,
    meta: { auth: true, menu: { title: 'Dashboard', icon: DashboardOne, order: 100 } },
    children: [
      {
        name: 'admin',
        path: '/admin',
        component: adminIndex,
        meta: { title: '工作台', menu: { title: '工作台' } },
      },
      {
        name: 'admin.animateList',
        path: 'animateList',
        component: animateListVue,
        meta: { title: '动态列表', menu: { title: '动态列表' } },
      },
      {
        name: 'admin.util',
        path: 'admin/util',
        component: utilVue,
        meta: { title: '组合API', menu: { title: '组合API' } },
      },
    ],
  },
  {
    path: '/admin',
    component: adminLayout,
    meta: { auth: true, menu: { title: '系统课程', icon: DashboardOne, order: 100 } },
    children: [
      {
        name: 'admin.system.index',
        path: 'system',
        component: () => import('@/views/system/admin.vue'),
        meta: { title: '系统课程', menu: { title: '系统课程' } },
      },
      {
        name: 'admin.system.add',
        path: 'system',
        component: () => import('@/views/system/create.vue'),
        meta: { title: '添加课程', menu: { title: '添加课程' } },
      },
      {
        name: 'admin.system.edit',
        path: 'system/edit/:id',
        component: () => import('@/views/system/edit.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: adminLayout,
    meta: { auth: true, menu: { title: '碎片课程', icon: AddFour, order: 100 } },
    children: [
      {
        name: 'admin.lesson.index',
        path: 'lesson',
        component: () => import('@/views/lesson/admin.vue'),
        meta: { title: '碎片课程', menu: { title: '课程列表' } },
      },
      {
        name: 'admin.lesson.add',
        path: 'lesson/add',
        component: () => import('@/views/lesson/form.vue'),
        meta: { title: '添加课程', menu: { title: '添加课程' } },
      },
      {
        name: 'admin.lesson.edit',
        path: 'lesson/edit/:id',
        component: () => import('@/views/lesson/form.vue'),
      },
    ],
  },
  {
    path: '/admin/editor',
    component: adminLayout,
    meta: { auth: true, menu: { title: '编辑器', icon: DocDetail } },
    children: [
      {
        name: 'wangEditor',
        path: '',
        component: wangeditorVue,
        meta: { title: '富文本编辑器', menu: { title: '富文本编辑器' } },
      },
      {
        name: 'markdown',
        path: 'markdown',
        component: markdownVue,
        meta: { title: 'Markdown', menu: { title: 'Markdown' } },
      },
    ],
  },
  {
    path: '/admin/upload',
    component: adminLayout,
    meta: {
      auth: true,
      menu: { title: '文件上传', icon: ImageFiles },
    },
    children: [
      {
        name: 'upload.singleImage',
        path: '',
        component: () => import('@/views/admin/singleImage.vue'),
        meta: { title: '图片上传', menu: { title: '图片上传' } },
      },
    ],
  },
] as RouteRecordRaw[]
