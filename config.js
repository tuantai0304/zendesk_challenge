/**
 * Created by TuanTai on 20/07/2017.
 */

var options = {
    host: 'webmobit.zendesk.com',
    // username: 'tuantai0304@gmail.com',
    // password: 'Kingheomap@123',
    path: '/api/v2/tickets/?per_page=' + per_page,
    method: 'GET',
    auth: 'tuantai0304@gmail.com' + ':' + 'Kingheomap@123',
    headers: {
        'Content-Type': 'application/json'
    }
};