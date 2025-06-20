const base = {
    get() {
        return {
            url : "http://localhost:8080/jiaoxuezhiyuangongxiangpingtai/",
            name: "jiaoxuezhiyuangongxiangpingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jiaoxuezhiyuangongxiangpingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "教学资源共享平台"
        } 
    }
}
export default base
