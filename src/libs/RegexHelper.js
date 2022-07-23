/** 
 * @Filename: RegexHelper.js
 * @Author: 이광호 (leekh4232@gmail.com)
 * @Description: 정규표현식 검사 수행
 */
import BadRequestException from '../exceptions/BadRequestException';

class RegexHelper {
    // constructor() {}

    /** 
     * 값의 존재 여부를 검사한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg        값이 없을 경우 표시할 메시지
     */
    value(field, msg) {
        // content 상수에 field의 value 할당;
        const content = field.value;
        
        // 그 값이 `undefined` or `null` or `데이터타입이 string이고, 공백을 제외한 길이가 0일 때
        if (content === undefined || content === null || (typeof content === 'string' && content.trim().length === 0)) {
            // 새로운 BadRequestException으로 (메시지, <INPUT>요소의 DOM 객체)를 전달
            throw new BadRequestException(msg, field);
        }

        return true;
    }

    /**
     * 입력값이 지정된 글자수 미만인지 검사한다.
     * @param {HTMLElement} field  검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {int} len            최소 글자수
     * @param {string} msg         값이 없을 경우 표시할 메시지
     */
    minLength(field, len, msg) {
        this.value(field, msg);
        // content 상수에 field의 value 할당;
        const content = field.value;

        // 그 값이 공백을 제외하고 최소값보다 작다면?
        if (content.trim().length < len) {
            // 새로운 BadRequestException으로 (메시지, <INPUT>요소의 DOM 객체)를 전달
            throw new BadRequestException(msg, field);
        }

        return true;
    }

    /**
     * 입력값이 지정된 글자수를 초과했는지 검사한다.
     * @param {HTMLElement} field  검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {int} len            최대 글자수
     * @param {string} msg         값이 없을 경우 표시할 메시지
     */
    maxLength(field, len, msg) {
        this.value(field, msg);
        // content 상수에 field의 value 할당;
        const content = field.value;

        // 그 값이 공백을 제외하고 최대값보다 크다면?
        if (content.trim().length > len) {
            // 새로운 BadRequestException으로 (메시지, <INPUT>요소의 DOM 객체)를 전달
            throw new BadRequestException(msg, field);
        }

        return true;
    }

    /**
     * 두 값이 동일한지 검사한다.
     * @param {string} origin    원본에 대한 <INPUT>요소의 DOM 객체
     * @param {string} compare   검사 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg       검사에 실패할 경우 표시할 메시지
     */
    compareTo(origin, compare, msg) {
        this.value(origin, msg);
        this.value(compare, msg);

        let src = origin.value.trim(); // 원본값을 가져온다.
        let dsc = compare.value.trim(); // 비교값을 가져온다.

        // 원본과 비교본이 같지 않다면?
        if (src !== dsc) {
            throw new BadRequestException(msg, origin);
        }

        return true; //성공했음을 리턴
    }

    /**
     * 라디오나 체크박스가 선택된 항목인지 확인한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg        검사에 실패할 경우 표시할 메시지
     */
    check(field, msg) {
        const checkedItem = Array.from(field).filter((v, i) => v.checked);

        if (checkedItem.length === 0) {
            throw new BadRequestException(msg, field[0]);
        }
    }

    /**
     * 라디오나 체크박스의 최소 선택 갯수를 제한한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg        검사에 실패할 경우 표시할 메시지
     */

    checkMin(field, len, msg) {
        const checkedItem = Array.from(field).filter((v, i) => v.checked);

        if (checkedItem.length < len) {
            throw new BadRequestException(msg, field[0]);
        }
    }

    /**
     * 라디오나 체크박스의 최대 선택 갯수를 제한한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg        검사에 실패할 경우 표시할 메시지
     */

    checkMax(field, len, msg) {
        const checkedItem = Array.from(field).filter((v, i) => v.checked);

        if (checkedItem.length > len) {
            throw new BadRequestException(msg, field[0]);
        }
    }

    /**
     * 입력값이 정규표현식을 충족하는지 검사한다.
     * @param {HTMLElement} field  검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg         표시할 메시지
     * @param {object} regexExpr   검사할 정규표현식
     */
    field(field, msg, regexExpr) {
        this.value(field, msg);

        const content = field.value.trim();

        // 입력값에 대한 정규표현식 검사가 실패라면?
        if (!regexExpr.test(content)) {
            throw new BadRequestException(msg, field);
        }

        return true;
    }
    
    /**
     * 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    num(field, msg) {
        return this.field(field, msg, /^[0-9]*$/);
    }

    /**
     * 영문으로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    eng(field, msg) {
        return this.field(field, msg, /^[a-zA-Z]*$/);
    }

    /**
     * 한글로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    kor(field, msg) {
        return this.field(field, msg, /^[ㄱ-ㅎ가-힣]*$/);
    }

    /**
     * 영문과 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    engNum(field, msg) {
        return this.field(field, msg, /^[a-zA-Z0-9]*$/);
    }

    /**
     * 한글과 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    korNum(field, msg) {
        return this.field(field, msg, /^[ㄱ-ㅎ가-힣0-9]*$/);
    }
    
    /**
     * 영문과 한글로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    engKor(field, msg) {
        return this.field(field, msg, /^[a-zA-Zㄱ-ㅎ가-힣]*$/);
    }

    /**
     * 태어난 년도 4자릿 수에 부합하는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {HTMLElement} field  검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg         값이 없을 경우 표시할 메시지
     */
    birthYear(field, msg) {           // 19nn | 20nn 년도부터 뒷자리는 0~9까지 {2개}
        return this.field(field, msg, /^(19|20)[0-9]{2}$/);
    }

    /**
     * 이메일 주소 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    email(field, msg) {
        return this.field(field, msg, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[az]{2})?)$/i);
    }

    /**
     * 휴대전화 번호 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    cellphone(field, msg) {
        return this.field(field, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
    }

    /**
     * 집전화 번호 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg        표시할 메시지
     */
    telephone(field, msg) {
        return this.field(field, msg, /^\d{2,3}\d{3,4}\d{4}$/);
    }

    /**
     * 휴대전화 번호 형식과 집전화 번호 형식 둘 중 하나를 충족하는지 검사.
     * @param {HTMLElement} field 검사할 대상에 대한 <INPUT>요소의 DOM 객체
     * @param {string} msg        조건을 충족하지 않을 경우 표시할 메시지
     */
    phone(field, msg) {
        this.value(field, msg);

        const content = field.value.trim();
        let check1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/ // 휴대전화 형식
        let check2 = /^\d{2,3}\d{3,4}\d{4}$/ // 집전화 형식

        // 휴대전화 형식도 아니고      집전화 형식도 아니라면?
        if (!check1.test(content) && !(check2.test(content))) {
            throw new BadRequestException(msg, field);
        }

        return true; // 성공했음을 리턴
    }
}

export default new RegexHelper();