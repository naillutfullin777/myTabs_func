h1 Скрипт "myTabs_func"
Скрипт "myTabs_func" создан для управления табами на вашем сайте. Для того, что бы использовать его, вам необходимо подключить его к своему
HTML документу:

<script src="myTabs.js"></script> (**если скрипт не работает, то проверьте правильность пути до myTabs.js**)

По умолчанию скрипт используется с нижеследующей конструкцией табов:
```html
<div class="flex-container">
        <div class="header"> 
            <div class="header-tab">First</div>
            <div class="header-tab">Second</div>
            <div class="header-tab">Third</div>
        </div>
        <div class="tab-content">
            <div class="title">First</div>
            <div class="text">My first tab</div>
            <div class="btn">More...</div>
        </div>
</div>
```    
Если вы используете другие классы, то введите их в коде скрипта (myTabs_func):

window.addEventListener('DOMContentLoaded', function() {
```javascript
    'use strict';

    let tab = document.querySelectorAll('.header-tab'), //Вкладки для табов (header-tab)
        headerTab = document.querySelector('.header'),  //Родитель вкладок (header)
        tabContent = document.querySelectorAll('.tab-content'); //Содержание табов (tab-content)
```


