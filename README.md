### 문자열 덧셈 계산기

- 입력한 문자열에서 숫자를 추출하여 더하는 계산기

### 기능 요구사항

- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.

### 구현할 기능 목록

**사용자 입력**

- [ ] 프로그램 실행 시 “덧셈할 문자열을 입력해 주세요.” 문구를 출력한다
- [ ] 구분자와 양수로 구성된 문자열을 입력할 수 있다

**구분자 확인**

구분자는 쉼표(,) 또는 콜론(:)을 구분자로 가지거나 (이하 기본 구분자)
문자열 앞부분의 “//”와 “\n” 사이에 위치한 문자를 구분자로 가질 수 있다 (이하 커스텀 구분자)

- [ ] 입력한 문자열의 구분자가 기본 구분자인지 커스텀 구분자인지 확인한다

**사용자 입력에서 숫자 추출**

- 기본 구분자일 경우
  - [ ] 쉼표(,) 또는 콜론(:)을 제외하고 숫자만 분리한다
- 커스텀 구분자일 경우
  - [ ] 문자열의 앞 부분이 //로 시작하는지 확인한다
  - [ ] 문자열에 \n를 포함하는지 확인한다
  - [ ] 이스케이프 처리된 문자를 사용할 수 있도록 적용한다
  - [ ] 커스텀 구분자를 기준으로 분리한다

**추출된 숫자 합산**

- [ ] 추출한 문자열을 숫자 타입으로 변환한 뒤 숫자의 합을 반환한다

**결과 문구 출력**

- [ ] 합산 결과를 출력한다

**에러 케이스 출력**
사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.

- [ ] 입력 값이 비어있으면 “[ERROR] 입력 값이 비어 있습니다.” 문구를 출력한다
- [ ] 기본 구분자와 커스텀 구분자가 없는 경우 "[ERROR] 구분자가 입력되지 않았습니다.” 문구를 출력한다
- [ ] 음수가 입력된 경우 "[ERROR] 음수는 입력하실 수 없습니다.” 문구를 출력한다
- [ ] 숫자가 아닌 값이 입력된 경우 “[ERROR] 구분자와 양수 외에는 입력하실 수 없습니다” 문구를 출력한다
