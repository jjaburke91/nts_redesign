
/*** NTS Stream ***/

var nts_streams = {};
nts_streams.selected_stream = 'ldn';
nts_streams.viewable = true;
nts_streams.streams = {
    'ldn': {
        title: "The Do!! You!! w/ Charlie Bones",
        tracklist: [
            'SILVER, HORACE-CHERRY BLOSSOM (RUDY VAN GELDER EDITION) (2009 DIGITAL REMASTER)',
            'LETTA MBULU-NORMALIZO',
            'JAMIE 3 26-GIVE ME YOUR LOVE',
            'KENNY BOBIEN-LET ME SHOW YOU (DJ SPEN & DJ KARIZMA MAIN REMIX)',
            'WEE GEE-HOLD ON (TO YOUR DREAM)',
            'JR, MARTIN L DUMAS-ATTITUDE, BELIEF & DETERMINATION (ZAF LOVEVINYL SLIGHT EDIT)',
            'SILVER, HORACE-CHERRY BLOSSOM (RUDY VAN GELDER EDITION) (2009 DIGITAL REMASTER)',
            'LETTA MBULU-NORMALIZO',
            'JAMIE 3 26-GIVE ME YOUR LOVE',
            'KENNY BOBIEN-LET ME SHOW YOU (DJ SPEN & DJ KARIZMA MAIN REMIX)',
            'WEE GEE-HOLD ON (TO YOUR DREAM)',
            'JR, MARTIN L DUMAS-ATTITUDE, BELIEF & DETERMINATION (ZAF LOVEVINYL SLIGHT EDIT)',
            'SILVER, HORACE-CHERRY BLOSSOM (RUDY VAN GELDER EDITION) (2009 DIGITAL REMASTER)',
            'LETTA MBULU-NORMALIZO',
            'JAMIE 3 26-GIVE ME YOUR LOVE',
            'KENNY BOBIEN-LET ME SHOW YOU (DJ SPEN & DJ KARIZMA MAIN REMIX)',
            'WEE GEE-HOLD ON (TO YOUR DREAM)',
            'JR, MARTIN L DUMAS-ATTITUDE, BELIEF & DETERMINATION (ZAF LOVEVINYL SLIGHT EDIT)'
        ]
    },
    'la': {
        title: "Kutmah",
        tracklist: [
            "EDAN-TIME OUT",
            "OS MUTANTES-AVE LUCIFER",
            "THE BEATLES-BLUE JAY WAY",
            "BRAINTICKET-EGYPTIAN KINGS",
            "STEVE HOWE-WILL O' THE WISP",
            "MIQUEL ATWOOD FERGUSON-LE YACHTING",
            "MICHAEL WHITE-THE BLESSING SONG",
            "BASSANT TAMER-JME E' 4HA- DFH1",
            "THUNDERCAT/SOUNWAVE-SMOOTH TALKER",
            "THUNDERCAT-SEASONS",
            "JEREMIAH JAE-SEASONS"
        ]
    },
    'int': {
        title: 'INT: Dolly Parton Gabba Special',
        tracklist: [
            'https://www.youtube.com/watch?v=dh5En5zb6PI'
        ]
    }
};
nts_streams.selectStream = function(streamName) {
    nts_streams.selected_stream = nts_streams.streams[streamName] || false;
};
nts_streams.toggleViewable = function() {
    nts_streams.viewable = !nts_streams.viewable;
};

/* Detecting scroll direction */
var currentScrollTop = $(this).scrollTop();
$(window).scroll( _.throttle( function() {

}), 500);

