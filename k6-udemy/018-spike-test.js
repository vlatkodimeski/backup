import http from 'k6/http';
import { sleep } from 'k6';

//10k users for 2minutes
//4 times then sress test
export const options = {
    stages: [
        {
            duration: '2m',
            target: 10000
        },
        {
            duration: '1m',
            target: 0
        }
    ]
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
}