$(function () {
    // Fake Select 기능
    $('.fakeselect__flag > button').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const $parent = $(this).parent();
        const $list = $parent.find('.fakeselect__flag__list');
        
        // 다른 열린 select 닫기
        $('.fakeselect__flag__list').not($list).hide();
        
        // 현재 select toggle
        $list.toggle();
    });
    
    // 옵션 선택
    $('.fakeselect__flag__list li button').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const $this = $(this);
        const $parent = $this.closest('.fakeselect__flag');
        const $mainButton = $parent.find('> button');
        const $list = $parent.find('.fakeselect__flag__list');
        
        // 선택된 값으로 메인 버튼 업데이트
        const selectedImg = $this.find('img').attr('src');
        const selectedText = $this.find('span').text();
        
        $mainButton.find('img').attr('src', selectedImg);
        $mainButton.find('span').text(selectedText);
        
        // 리스트 닫기
        $list.hide();
    });
    
    // 외부 클릭시 select 닫기
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.fakeselect__flag').length) {
            $('.fakeselect__flag__list').hide();
        }
    });
    
    // 초기 상태에서 리스트 숨기기
    $('.fakeselect__flag__list').hide();
    
    // 햄버거 메뉴 기능
    $('.menu-toggle').on('click', function() {
        const $nav = $('nav');
        const $overlay = $('.nav-overlay');
        const $menuBtn = $(this);
        
        // 메뉴 토글
        $nav.toggleClass('nav-open');
        $overlay.toggleClass('active');
        $menuBtn.toggleClass('active');
    });
    
    // 오버레이 클릭시 메뉴 닫기
    $('.nav-overlay').on('click', function() {
        $('nav').removeClass('nav-open');
        $('.nav-overlay').removeClass('active');
        $('.menu-toggle').removeClass('active');
    });
    
    // 네비게이션 링크 클릭시 메뉴 닫기 (모바일에서)
    $('nav a').on('click', function() {
        if ($(window).width() <= 991) {
            $('nav').removeClass('nav-open');
            $('.nav-overlay').removeClass('active');
            $('.menu-toggle').removeClass('active');
        }
    });
    
    // 충전 타입 라디오 버튼 이벤트
    $('.chargingtype input[type="radio"]').on('change', function() {
        // 모든 충전 타입 label에서 active 클래스 제거
        $('.chargingtype label').removeClass('active');
        
        // 선택된 라디오 버튼의 부모 label에 active 클래스 추가
        if ($(this).is(':checked')) {
            $(this).parent('label').addClass('active');
        }
    });
});