$(document).ready(function(){
  const awsTag = "bookbudy-20";
  const amazonStore = '?&_encoding=UTF8&tag=bookbudy-20';
  var technicalQuestions = $('#technicalQuestions').hide();
  var bookTitle = '';
  var pathname = window.location.href;

  // fix menu when passed
  $('.masthead').visibility({
    once: false,
    onBottomPassed: function() {
      $('.fixed.menu').transition('fade in');
    },
    onBottomPassedReverse: function() {
      $('.fixed.menu').transition('fade out');
    }
  });

  // create sidebar and attach to menu open
  $('.ui.sidebar').sidebar('attach events', '.toc.item');

  $('.opengenerator').click(function() {
    $('.ui.fullscreen.modal').modal('show');
  });

  $('.opencontact').click(function() {
    $('.ui.small.modal').modal('show');
  });

  $('.single-item').slick({
    dots: true
  });

  // Preload responses
  // $("#answer1Input").val($("#answer1_5a").next('label').text());
  // $("#answer2Input").val($("#answer2_5a").next('label').text());
  // $("#answer3Input").val($("#answer3_5a").next('label').text());
  // $("#answer4Input").val($("#answer4_5a").next('label').text());
  // $("#answer5Input").val($("#answer5_5a").next('label').text());
  // $("#answer6Input").val($("#answer6_5a").next('label').text());
  // $("#answer1InputTitle").val($("#answer1_5").text());
  // $("#answer2InputTitle").val($("#answer2_5").text());
  // $("#answer3InputTitle").val($("#answer3_5").text());
  // $("#answer4InputTitle").val($("#answer4_5").text());
  // $("#answer5InputTitle").val($("#answer5_5").text());
  // $("#answer6InputTitle").val($("#answer6_5").text());
  // copyToReview();

  $("div.reviewwrite-question input[type=radio]").change(function(){
    var parent = $(this).closest('div.reviewwrite-question');
    var label = $(this).next('label').text();
    $(parent).find('.answerinput').val(label);
    copyToReview();
  });

  $("div.reviewwrite-question input[type=checkbox]").change(function(){
    var parent = $(this).closest('div.reviewwrite-question');
    var responses = [];
    var titleCheck = false;

    $.each( $(parent).find("input[type=checkbox]:checked"), function(){
      var label = $(this).next('label');
      if ( titleCheck === true ) {
        if ( $(label).text().indexOf(bookTitle) != -1 ) {
          $(label).text(function () {
            responses.push( replaceTitle(bookTitle, $(this).text() ) );
          });
        } else {
          responses.push($(label).text());
        }
      } else {
        if ( $(label).text().indexOf(bookTitle) != -1 ) {
          titleCheck = true;
        }
        responses.push($(label).text());
      }
    });
    $(parent).find('.answerinput').val( responses.join(" ") );
    copyToReview();
  });

  if ( pathname.includes("?") ) {

    var params = pathname.substring(pathname.indexOf("?")+1);

    $('.noBookTitle').each(function( index ) {
      $(this).hide();
    });

    $('.yesBookTitle').each(function( index ) {
      $(this).fadeIn();
    });

    var pretty = prettify(params);
    bookTitle = pretty;
    $('input#bookTitle').val(bookTitle);
    $('.hideCustomize').each(function( index ) {
      $(this).fadeIn();
    });
    $('span.book-title').each(function( index ) {
      $(this).text( bookTitle ).wrapInner('<i>');
    });

    var amazonLink = "https://www.amazon.com/gp/search/ref=nb_sb_ss_c_2_39?url=search-alias%3Dstripbooks&tag=" + awsTag + "&keywords=" + bookTitle;
    $('#amazonLink').attr('href', amazonLink);
    copyToReview();
  }


  $('a#changeBook').on('click', function(){

    $('.yesBookTitle').each(function( index ) {
      $(this).hide();
    });

    $('.noBookTitle').each(function( index ) {
      $(this).fadeIn();
    });
  });

  $('input#bookTitle').on('input propertychange paste', function() {
    bookTitle = $('input#bookTitle').val();
    $('.hideCustomize').each(function( index ) {
      $(this).fadeIn();
    });
    $('span.book-title').each(function( index ) {
      $(this).text( bookTitle ).wrapInner('<i>');
    });

    newURL = bookTitle.replace(/\s+/g, '-').toLowerCase();
    var url = document.location.href.split("?")[0]+"?"+newURL;

    $('.book-title-url').attr('href', url);

    var amazonLink = "https://www.amazon.com/gp/search/ref=nb_sb_ss_c_2_39?url=search-alias%3Dstripbooks&tag=" + awsTag + "&keywords=" + bookTitle;
    $('#amazonLink').attr('href', amazonLink);

    copyToReview();
  });

  $('input#bookURL').on('input propertychange paste', function() {
    var inputURL = $(this).val();
    var splitURL = inputURL.split("?")[0];
    var newURL = splitURL.concat(amazonStore,'#reviewsMedley');
    $('#amazonLink').attr('href', newURL);
    copyToReview();
  });

  $('#bookSummary').on('input propertychange paste', function() {
    $("#finalSummary").text( $(this).val() );
    copyToReview();
  });

  $("#freeCopy").change(function(){
    if( $(this).is(':checked') ){
      $("#finalFreeCopy").text('I received a free copy for a fair and impartial review.');
    } else {
      $("#finalFreeCopy").text('');
    }
    copyToReview();
  });

  $("#showTitles").change(function(){
    copyToReview();
  });

  $('#showTechnical').click(function() {
    $(this).text('Toggle technical questions');
    technicalQuestions.toggle();
  });

  $('button#editReview').on('click', function(){
    var editable = $('#editableReview').attr('contenteditable');

    $(this).text('EDIT MODE').addClass('button-error');
    $('#editableReview').addClass('active');

    $('.hideEditable').each(function( index ) {
      $(this).hide();
    });

    // Make the review editable
    if (editable == 'false') {
      $('#editableReview').attr('contenteditable','true');
    }
  });

  $('button#resetReview').on('click', function(){
    $('button#editReview').text('Switch to Edit Mode').removeClass('button-error');
    $('#editableReview').removeClass('active').attr('contenteditable','false').text( $('#finalReview').text() );
  });

  $('ul.question-stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });

  }).on('mouseout', function(){
    $(this).parent().children('li').each(function(e){
      $(this).removeClass('hover');
    });
  });

  $('ul.question-stars li').on('click', function(){
    var question = $(this).parents('div.reviewwrite-question');
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var rating = $(this).data('answer');
    var stars = $(this).parent().children('li');
    var answers = $(question).find('div.answer-box');
    var input = $(question).find('input.ratinginput');
    var totalStars = 0;

    $(answers).removeClass('current');
    var $current = $('div.answer-box[data-answer-id="' + rating + '"]').addClass('active');
    var label = $current.find('label').text();
    var title = $current.find('.answer-title').text();
    $(question).find('.answerinput').val(label);
    $(question).find('.titleinput').val(title);

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }

    // note that user has given a rating
    $(input).val(onStar).addClass('has-rating');
    // hide irrelevant responses
    $(answers).not($current).removeClass('active');
    // provide final rating
    $("input.has-rating").each(function(){
      // count total of all stars
      totalStars += Number($(this).val());
      // get number of questions with ratings
      var r = $("input.has-rating").length;
      // calculate the average rating
      var averageStar = Math.ceil(totalStars/r);
      var stars = $("#final-stars").children('li');
      $(stars).removeClass('selected');
      for (i = 0; i < averageStar; i++) {
        $(stars[i]).addClass('selected');
      }
    });

    copyToReview();
  });
});

function copyToReview() {
  $("#finalSummary").text($("#bookSummary").val());
  $("#finalAnswer1").text($("input#answer1Input").val());
  $("#finalAnswer2").text($("input#answer2Input").val());
  $("#finalAnswer3").text($("input#answer3Input").val());
  $("#finalAnswer4").text($("input#answer4Input").val());
  $("#finalAnswer5").text($("input#answer5Input").val());
  $("#finalAnswer6").text($("input#answer6Input").val());

  $("#finalAnswer1TitleText").text($("input#answer1InputTitle").val());
  $("#finalAnswer2TitleText").text($("input#answer2InputTitle").val());
  $("#finalAnswer3TitleText").text($("input#answer3InputTitle").val());
  $("#finalAnswer4TitleText").text($("input#answer4InputTitle").val());
  $("#finalAnswer5TitleText").text($("input#answer5InputTitle").val());
  $("#finalAnswer6TitleText").text($("input#answer6InputTitle").val());

  $('#editableReview .warning').remove();

  var editable = $('#editableReview').attr('contenteditable');

  if (editable == 'false') {
    $("#editableSummary").text( $("#finalSummary").text() );
    $("#editableAnswer1").text( $("#finalAnswer1").text() );
    $("#editableAnswer2").text( $("#finalAnswer2").text() );
    $("#editableAnswer3").text( $("#finalAnswer3").text() );
    $("#editableAnswer4").text( $("#finalAnswer4").text() );
    $("#editableAnswer5").text( $("#finalAnswer5").text() );
    $("#editableAnswer6").text( $("#finalAnswer6").text() );
    $("#editableFreeCopy").text( $("#finalFreeCopy").text() );
    if( $("#showTitles").is(':checked') ){
      $("#editableAnswer1Title").text( $("#finalAnswer1Title").text() );
      $("#editableAnswer2Title").text( $("#finalAnswer2Title").text() );
      $("#editableAnswer3Title").text( $("#finalAnswer3Title").text() );
      $("#editableAnswer4Title").text( $("#finalAnswer4Title").text() );
      $("#editableAnswer5Title").text( $("#finalAnswer5Title").text() );
      $("#editableAnswer6Title").text( $("#finalAnswer6Title").text() );
    } else {
      $("#editableAnswer1Title").text('');
      $("#editableAnswer2Title").text('');
      $("#editableAnswer3Title").text('');
      $("#editableAnswer4Title").text('');
      $("#editableAnswer5Title").text('');
      $("#editableAnswer6Title").text('');
    }
  }
  else {
    alert('Your review has been marked editable and can no longer be updated by the application.')
  }
}

function prettify(str) {
  return str.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
    return (prep && ' ') + letter.toUpperCase();
  });
}

function replaceTitle(title, string) {
  title = title || "";
  string = string || "";

  return string
    .replace(new RegExp('^' + title, 'i'), "It")
    .replace(new RegExp(title, 'i'), "it")
}

function copyToClipboard(element) {
  var $temp = $("<textarea>");
  $(element).addClass('copied');
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  setTimeout(function(){
    $(element).removeClass('copied');
  }, 1000);
}
