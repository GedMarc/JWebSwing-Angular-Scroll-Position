/*
 * Copyright (C) 2017 Marc Magon
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

JW_APP_NAME.directive('scrollPosition', scrollPosition);

function scrollPosition() {
    return {
        scope: {
            scrollPosition: '=',
            maxHeight: '='
        },
        link: function (scope) {
            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop() > scope.maxHeight;
                if (scrollTop !== scope.prevScrollTop) {
                    scope.$apply(function () {
                        scope.scrollPosition = scrollTop;
                    });
                }
                scope.prevScrollTop = scrollTop;
            });
        }
    };
}
