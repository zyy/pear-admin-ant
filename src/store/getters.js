const getters = {
  layout: state => state.app.layout,
  theme: state => state.app.theme,
  color: state => state.app.color,
  collapsed: state => state.app.collapsed,
  settingVisible: state => state.app.setting.opened,
  logo: state => state.app.logo,
  tab: state => state.app.tab,
  tabType: state => state.app.tabType,
  routerActive: state => state.app.routerActive,
  sideWitch: state => state.app.sideWitch,
  collapsedWidth: state => state.app.collapsedWidth,
  fixedHeader: state => state.app.fixedHeader,
  fixedSide: state => state.app.fixedSide,
  routes: state => state.app.routes,
  colorList: state => state.app.colorList,
  routerAnimate: state => state.app.routerAnimate,
  language: state => state.app.language,
  isMobile: state => state.app.isMobile,
  keepAlive: state=> state.app.keepAlive,
  token: state =>
    state.user.token
      ? state.user.token
      : localStorage.getItem("pear_admin_ant_token")
      ? localStorage.getItem("pear_admin_ant_token")
      : "",
  menu: state =>
    state.user.userRoutes.length !== 0
      ? state.user.userRoutes
      : localStorage.getItem("user_routes")
      ? JSON.parse(localStorage.getItem("user_routes"))
      : ""
};
export default getters;
