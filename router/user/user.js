/* ==================== START modules ==================== */

const user_controller           = require('../../controller/userController')
const review_controller         = require('../../controller/reviewController')
const like_controller           = require('../../controller/likeController')
const place_controller          = require('../../controller/placeController')
const course_controller         = require('../../controller/courseController')
const express                   = require('express')
const router                    = express.Router()

/* ==================== END modules ==================== */

router.put('/password', user_controller.userPasswordReset)                      // 회원의 비밀번호 재설정
router.post('/', user_controller.user_create)                                   // 회원가입
router.post('/login', user_controller.user_login)                               // 로그인
router.get('/:memberNumber', user_controller.user_detail)                       // 회원한명조회
router.put('/:memberNumber', user_controller.user_update)                       // 회원수정
router.delete('/:memberNumber', user_controller.user_delete)                    // 회원삭제
router.get('/email/:email', user_controller.userEmailDuplicateCheck)            // 회원 이메일 중복확인
router.get('/nick-name/:nickName', user_controller.userNickNameDuplicateCheck)  // 회원 닉네임 중복확인
router.post('/help-email', user_controller.userEmailFind)                       // 회원의 이메일 찾기
router.post('/help-pw-code', user_controller.userSendSecurityCode)              // 회원의 비밀번호 찾기 - 보안코드 전송

/* ==================== review router ==================== */
router.get('/:memberNumber/review', review_controller.reviewReadByUser)         // 회원의 리뷰목록 조회

/* ==================== like router ==================== */
router.post('/:memberNumber/like', like_controller.likeAddPlace)                // 좋아요 실행
router.get('/:memberNumber/likes', like_controller.likeReadAllByUser)           // 회원의 좋아요 목록
router.delete('/:memberNumber/like', like_controller.likeCancelPlace)           // 좋아요 취소

/* ==================== place router ==================== */
router.get('/:memberNumber/place', place_controller.placeListUser)              // 회원의 장소 목록 조회

/* ==================== course router ==================== */
router.get('/:memberNumber/course', course_controller.courseListUser)           // 회원의 코스 목록 조회

module.exports = router