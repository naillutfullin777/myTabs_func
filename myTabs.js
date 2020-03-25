window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.header-tab'), //Вкладки для табов (header-tab)
        headerTab = document.querySelector('.header'),  //Родитель вкладок (header)
        tabContent = document.querySelectorAll('.tab-content'); //Содержание табов (tab-content)

    //Функция hideTabContent скрывает ненужные табы с помощью класса 'hide'
    //Мы вызываем ее  с параметром (1) что бы скрыть при загрузке страницы все табы, кроме первого
    hideTabContent(1);
    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    //Функция showTabContent показывает таб, который мы передаем ей с параметром 'b' назная ему класс 'show'
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
//При клике на родитель табов (.header) мы через event.target узнаем на какой таб кликнул пользователь
//и с помощью функции hideTabContent сначала скрываем содержимое всех табов, а потом с помощью функции
//showTabContent показываем содержимое нужного таба передав ему класс 'show'
headerTab.addEventListener('click', function(event) {
    let target = event.target;

    if (target && target.classList.contains('header-tab')) {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
});
});