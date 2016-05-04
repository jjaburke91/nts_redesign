
/*** NTS Stream Navigation ***/

var nts_stream_classes = {
    visible_stream: 'stream-info--visible',
    playing_stream: 'stream-info--playing',
    nav_stream: 'nts-stream-cell--active',

    // Animations
    slide_to_left: 'stream-slideToLeft',
    slide_to_right: 'stream-slideToRight',
    slide_from_right: 'stream-slideFromRight',
    slide_from_left: 'stream-slideLeftRight'
};

var nts_streams = {};
nts_streams.streams = {
    'ldn': {
        streamName: 'ldn',
        title: "The Do!! You!! w/ Charlie Bones",
        order: 1
    },
    'la': {
        streamName: 'la',
        title: "Kutmah",
        order: 2
    },
    'int': {
        streamName: 'int',
        title: 'INT: Dolly Parton Gabba Special',
        order: 3
    }
};
nts_streams.selected_stream = false;

nts_streams.selectStream = function(streamName) {
    if (!nts_streams.streams[streamName]) {
        console.error("Unknown stream name");
        return;
    }

    if ( (nts_streams.selected_stream.streamName == streamName) && nts_streams.viewable ) {
        // Clicking on stream that is already in view.
        nts_streams.toggleViewable(false);
    } else if (nts_streams.selected_stream && (nts_streams.selected_stream.streamName == streamName) && !nts_streams.viewable) {
        // Clicking on stream whilst it's information is closed
        nts_streams.toggleViewable(true);
    } else if ( nts_streams.selected_stream != nts_streams.streams[streamName] ) {
        // Slide between streams
        var oldVisibleStream = nts_streams.selected_stream || false;
        nts_streams.selected_stream = nts_streams.streams[streamName] || false;

        var oldStreamElement = $("#" + oldVisibleStream.streamName + '-stream');
        var newStreamElement = $("#" + nts_streams.streams[streamName].streamName + "-stream");


        // Use these two classes for shrinking affect on change
        oldStreamElement.removeClass(nts_stream_classes.visible_stream);
        newStreamElement.addClass(nts_stream_classes.visible_stream);

        if (oldVisibleStream.order < nts_streams.selected_stream.order) {
            // oldVisibleStream.addClass( nts_streams.nav_stream);;
        }

        // slideStreams( oldStreamElement, newStreamElement);

        console.log("selecting '" + streamName + "'");
    }

};
nts_streams.toggleViewable = function(viewableValue, streamName) {
    console.log("setting viewable to " + (viewableValue || !nts_streams.viewable));
    nts_streams.viewable = viewableValue || !nts_streams.viewable;

    if (nts_streams.viewable) {
        var viewElement = streamName ?
            $('#' + nts_streams.streams[streamName].streamName + '-stream') :
            $('#' + nts_streams.selected_stream.streamName + '-stream');
        viewElement.addClass(nts_stream_classes.visible_stream);
    } else {
        $('.' + nts_stream_classes.visible_stream).removeClass(nts_stream_classes.visible_stream);
    }
};

function slideStreams(oldElement, newElement) {

}

/*
function changePlayingStream(oldStream, newStream) {
    var oldStreamNavElement = $("#" + oldVisibleStream.streamName + '-nav');
    var newStreamNavElement = $("#" + nts_streams.streams[streamName].streamName + "-nav");
    oldStreamNavElement.removeClass(nts_stream_classes.nav_stream);
    newStreamNavElement.addClass(nts_stream_classes.nav_stream);
}
*/

/*** On Page Load ***/

$(document).ready(function() {
    var startingStream = 'la'
    nts_streams.selectStream( startingStream);
    nts_streams.toggleViewable( true, startingStream);

    /* Detecting scroll direction */
    var currentScrollTop = $(this).scrollTop();
    $(window).scroll( _.throttle( function() {

    }), 500);
});

