const SINGLES_LIST = [
    'chifang',
    '心心',
    'CR',
    '銀行球棒俠',
    'LC',
    '魔法蛋',
    '安德咖啡',
    '燒開Mr.Ho',
    '阿瑋',
    'JIM',
    '折原',
    '查理',
    '阿智(聖主)',
    '大頭',
    'Shiro',
    'ziv',
    '品融'
]

const DOUBLES_LIST = [
    [ '查理', '心心' ],
    [ 'Shiro', '阿瑋' ],
    [ '安德咖啡', '馬叔叔馬馬鈴叔' ],
    [ 'YM', 'JIM' ],
    [ '大頭', 'LC' ],
    [ 'chifang', '燒開Mr.Ho' ]
]

const single_pick = document.getElementById('single_pick');
const double_pick = document.getElementById('double_pick');

var double_result_1 = ''
var double_result_2 = ''
var single_result = ''

// Disable
single_pick.disabled = true;
single_pick.addEventListener('click', function() {
    var picked = ''
    while (picked === '' || picked === double_result_1 || picked === double_result_2) {
        const index = getRandomInt(SINGLES_LIST.length);
        picked = SINGLES_LIST[index];
    }

    single_result = picked;

    const result = document.getElementById('single_result');
    result.textContent = single_result;
});

// Disable
double_pick.disabled = true;
double_pick.addEventListener('click', function() {
    const index = getRandomInt(DOUBLES_LIST.length);
    var picked = DOUBLES_LIST[index];

    double_result_1 = picked[0];
    double_result_2 = picked[1];

    const result = document.getElementById('double_result');
    result.textContent = double_result_1 + ' & ' + double_result_2;
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}