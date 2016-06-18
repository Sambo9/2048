(function( $ ) {
  $.fn.extend
  ({
      mygame: function(size)
      {
        // =============================
      	// ========= VARIABLES =========
        // =============================

      	var _gameObject = $(this).attr('id');
        var _blockSize = size;
        var _boardSize = 4 * _blockSize;

        if ( typeof _gameObject !== 'undefined' && _blockSize !== 'undefined' &&  _boardSize !== 'undefined')
        {
          // ================================
          // ========= CREATE BOARD =========
          // ================================

           function board()
           {
            var _div = $('<div>')
                            .attr("id", "board")
                            .attr('tabindex','1')
                            .height(_boardSize)
                            .width(_boardSize)
                            .css({
                                    "background-color":'white',
                                    'margin':'auto'
                                });
            $('#'+_gameObject).append(_div);
           }
           board();

            // =================================================
            // ========= CREATE BLOCK INSIDE THE BOARD =========
            // =================================================

            function blocks()
            {
              for (i = 0; i < 16; ++i)
              {
                var _block = $("<div>")
                              .attr("class", "square-container")
                              .height(_blockSize)
                              .width(_blockSize)
                              .css({
                                  "background-color" : "	#DCDCDC",
                                  'border' : '1px solid',
                                  'float':'left',
                                  'box-sizing':'border-box',
                                  'z-index':'0',
                                  });
                _block.attr('id', i);
                $('#board').append(_block);
              }
            }
            blocks();

            // ===============================
            // ========= CREATE TILE =========
            // ===============================

            function createTile()
            {

              var _v = 2 * (Math.floor(Math.random() * 2) + 1);
              var _color;
              if(_v == 2)
              {
                _color = '#e5f5ff';
              }
              if(_v == 4)
              {
                _color = '#ccebff';
              }
              var _tile = $('<div>')
                              .attr('class', 'tile')
                              .height(_blockSize-2)
                              .width(_blockSize-2)
                              .text(_v)
                              .css({
                                  "background-color" : _color,
                                  'margin' : 'auto',
                                  'float':'left',
                                  'box-sizing':'border-box',
                                  'border' : '1px solid',
                                  'border-radius': '20px',
                                  'text-align':'center',
                                  'padding':'20%',
                                  'font-size':'300%'
                                  });
                if($('.square-container:empty'))
                {
                  var _nbOfEmpty = $('.square-container:empty').length;
                  var _nbTile = Math.floor(Math.random() * _nbOfEmpty-1) + 0;
                  var _emptyContainer = $('.square-container:empty').get(_nbTile);
                  $(_emptyContainer).append(_tile);
                }

            }

            var _nbOfEmpty = $('.square-container:empty').length;

            if(_nbOfEmpty == 16)
            {
              createTile();
              createTile();
            }

            // ============================================
            // ========= KEYBOARD ARROWS LISTENER =========
            // ============================================
            $('html').bind('keydown', function(e)
            {
              if ( e.which == 37 )
              {
                e.preventDefault();
                move(1, 4, 1);
              }
              if ( e.which == 38 )
              {
                e.preventDefault();
                move(4, 1, 4);
              }
              if ( e.which == 39 )
              {
                e.preventDefault();
                move(2, 4, -1);
              }
              if ( e.which == 40 )
              {
                e.preventDefault();
                move(8, 1, -4);
              }
            });

            // ==================================
            // ========= FUNCTIONS MOVE =========
            // ==================================

            function move(start, increment, direction)
            { var _bool = false;
              for (var i = 0; i < 3; ++i)
              {
                var _container = $('#' + (start + i * direction) + ',#' + (increment + (start + i * direction)) + ',#' + ((start + i * direction) + increment * 2) + ',#' + ((start + i * direction) + increment * 3)).not(':empty');
                _container.each(function()
                {
                  var _child = $(this).children();
                  var _parent = _child.parent();

                  while ($('#'+( parseInt(_parent.attr('id')) - direction)).is(':empty') &&
                  _parent.attr('id') != start - direction &&
                  _parent.attr('id') != start - direction + increment &&
                  _parent.attr('id') != start - direction + increment * 2 &&
                  _parent.attr('id') != start - direction + increment * 3)
                  {
                    if(direction === 1)
                    {
                      //===============================TO DO=============================================
                    }
                    var _childToMove = _parent.children().detach();
                    $('#'+( parseInt(_parent.attr('id')) - direction)).append(_childToMove);
                    _parent = _child.parent();

                    _bool = true;
                  }

                  var _idBefore = _child.parent().attr('id') - direction;
                  if (_idBefore < 0) return;

                  var value = $('#' + _idBefore).children().text();

                  if(value == _child.text() &&
                  _child.parent().attr('id') != start - direction &&
                  _child.parent().attr('id') != start - direction + increment &&
                  _child.parent().attr('id') != start - direction + increment * 2 &&
                  _child.parent().attr('id') != start - direction + increment * 3)
                  {
                    var _fusion = $('#' + _idBefore).children().text(value * 2);

                    if($('#' + _idBefore).children().text() == 4)
                    {
                      $('#' + _idBefore).children().css({"background-color" : '#ccebff'});
                    }
                    if($('#' + _idBefore).children().text() == 8)
                    {
                      $('#' + _idBefore).children().css({"background-color" : '#b3e0ff'});
                    }
                    if($('#' + _idBefore).children().text() == 16)
                    {
                      $('#' + _idBefore).children().css({"background-color" : '#99d6ff'});
                    }
                    if($('#' + _idBefore).children().text() == 32)
                    {
                      $('#' + _idBefore).children().css({"background-color" : '#80ccff'});
                    }
                    if($('#' + _idBefore).children().text() == 64)
                    {
                      $('#' + _idBefore).children().css({"background-color" : '#66c2ff'});
                    }
                    if($('#' + _idBefore).children().text() == 128)
                    {
                      $('#' + _idBefore).children().css({"background-color" : '#4db8ff'});
                    }
                    if($('#' + _idBefore).children().text() == 256)
                    {
                      $('#' + _idBefore).children().css({"background-color" : '#33adff'});
                    }
                    if($('#' + _idBefore).children().text() == 512)
                    {
                      $('#' + _idBefore).children().css({"background-color" : '#1aa3ff'});
                    }
                    if($('#' + _idBefore).children().text() == 1024)
                    {
                      $('#' + _idBefore).children().css({"background-color" : '#0099ff'});
                    }
                    if($('#' + _idBefore).children().text() == 2048)
                    {
                      $('#' + _idBefore).children().css({"background-color" : '#ff0000'});
                    }

                    _child.detach();
                  }
                });

              }
              if(_bool)
              {
                createTile();
              }
            }
            return this;
          }
     }
   })
}( jQuery ));

jQuery(document).ready(function($)
{
  $('#test').mygame(100);
});
