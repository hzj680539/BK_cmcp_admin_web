// 数据统计
import layout from '@/components/layout/Index'
const WebsiteOverview = resolve => require(['@/components/pages/statistic/WebsiteOverview'], resolve)
const VisitedPage = resolve => require(['@/components/pages/statistic/VisitedPage'], resolve)
const TrendAnalysis = resolve => require(['@/components/pages/statistic/TrendAnalysis'], resolve)
const RealtimeVisitor = resolve => require(['@/components/pages/statistic/RealtimeVisitor'], resolve)

const routes = [
  {
    path: '/statistic_data',
    component: layout,
    children: [
      {
        path: '',
        alias: 'website_website_overview',
        component: WebsiteOverview
      },
      {
        path: 'website_overview',
        component: WebsiteOverview
      },
      {
        path: 'visited_page',
        component: VisitedPage
      },
      {
        path: 'trend_analysis',
        component: TrendAnalysis
      },
      {
        path: 'realtime_visitor',
        component: RealtimeVisitor
      }
    ]
  }
]

export default routes
