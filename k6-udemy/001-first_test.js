import http from "k6/http"
import { sleep, check } from "k6";
import exec from "k6/execution";


export let options = {
    vus: 10,
    duration: '5s',
    thresholds: {
        http_req_duration:['p(95) > 200'],
        http_req_failed: ['rate < 0.01'], //http erorrs should be less then 1%
        //http_req_failed: ['count < 5'],
        http_reqs: ['count > 35'],
        http_reqs: ['rate > 4']
    }
};
export default function () {
    const res = http.get("https://test.k6.io")
    sleep(1);
    //console.log(res.status)
    check(res, {'status is 200': (r)=> r.status === 200});
    check(res, {'page is startpage': (r)=> r.body.includes ('Collection')});

    check(res, {
        'status is 200': (r)=> r.status === 200,
        'page is startpage': (r)=> r.body.includes ('Collection')
});

    console.log(exec.scenario.iterationInTest);
}