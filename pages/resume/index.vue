<template>
  <div class="bg-gray-50 font-sans leading-normal tracking-normal">
    <div class="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg my-8 p-8 md:p-12">

      <!-- Header -->
      <header class="text-center mb-12 border-b pb-8">
        <h1 class="text-5xl font-bold text-gray-800">홍길동</h1>
        <p class="text-xl text-blue-600 font-semibold mt-2">사용자 경험을 개선하고 비즈니스 성장에 기여하는 개발자</p>
        <div class="mt-6 flex justify-center space-x-6 text-gray-600">
          <span>Email: gildong.hong@example.com</span>
          <span>Phone: 010-1234-5678</span>
          <a href="#" class="text-blue-500 hover:underline">GitHub</a>
          <a href="#" class="text-blue-500 hover:underline">Blog</a>
        </div>
      </header>

      <main class="space-y-16">

        <!-- About Me -->
        <section>
          <h2 class="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p class="text-gray-700 text-lg">
            안녕하세요. 3년차 프론트엔드 개발자 홍길동입니다. 저는 복잡한 문제를 단순화하고, 직관적인 UI/UX를 통해 사용자에게 최고의 경험을 제공하는 것에 큰 보람을 느낍니다. 새로운 기술을 배우고 동료들과 지식을 공유하며 함께 성장하는 것을 즐깁니다.
          </p>
        </section>

        <!-- Skills -->
        <section>
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 class="text-xl font-semibold text-gray-700 mb-2">{{ skill }}</h3>
              <div class="flex flex-wrap gap-2">
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">TypeScript</span>
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">JavaScript</span>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-700 mb-2">Frontend</h3>
              <div class="flex flex-wrap gap-2">
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full">React</span>
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full">Vue.js</span>
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full">Nuxt.js</span>
              </div>
            </div>
            <!-- Add other skill categories similarly -->
          </div>
        </section>

        <!-- Work Experience -->
        <section>
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Work Experience</h2>
          <div class="space-y-12">
            <!-- Experience 1 -->
            <div class="border-l-4 border-blue-500 pl-6">
              <h3 class="text-2xl font-bold">OO 컴퍼니</h3>
              <p class="text-md text-gray-600">프론트엔드 개발자 | 2022.03 - 현재</p>

              <div class="mt-4 space-y-6">
                <h4 class="text-xl font-semibold text-gray-700">주요 프로젝트: OO 플랫폼 프론트엔드 개발</h4>
                <p class="text-gray-600">플랫폼의 사용자 경험 개선 및 신규 기능 개발을 담당했습니다.</p>

                <div class="bg-gray-100 p-4 rounded-lg">
                  <h5 class="font-bold mb-2">[주요 성과] 레거시 코드 리팩토링을 통한 초기 로딩 속도 50% 개선</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>문제 정의:</strong> 페이지 초기 로딩 시 불필요한 API 호출과 큰 번들 사이즈로 인해 사용자들이 이탈하는 문제.</li>
                    <li><strong>해결 과정:</strong> Code Splitting 적용, Tree Shaking을 통한 번들 최적화, React.lazy와 Suspense를 이용한 컴포넌트 지연 로딩 도입.</li>
                    <li><strong>결과:</strong> Lighthouse 성능 점수 30점 향상, 초기 로딩 속도 50% 단축, 사용자 이탈률 15% 감소.</li>
                  </ul>
                </div>
                <p><strong class="font-semibold">사용한 기술:</strong> React, TypeScript, Webpack, Styled-Components</p>
              </div>
            </div>
            <!-- Add other experiences similarly -->
          </div>
        </section>

        <!-- Other Experience -->
        <section>
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Other Experience</h2>
          <div class="border-l-4 border-gray-300 pl-6">
            <h3 class="text-xl font-bold">개인 프로젝트: 블로그 플랫폼 개발</h3>
            <p class="text-md text-gray-600">2023.01 - 2023.03</p>
            <p class="mt-2 text-gray-700">Nuxt.js와 Markdown을 이용한 정적 사이트 블로그를 개발하여 운영 중입니다. SEO 최적화 및 다크 모드 기능을 구현했습니다.</p>
            <p class="mt-2"><strong class="font-semibold">사용한 기술:</strong> Nuxt.js, TypeScript, Tailwind CSS</p>
          </div>
        </section>

        <!-- Education -->
        <section>
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Education</h2>
          <div class="border-l-4 border-gray-300 pl-6">
            <h3 class="text-xl font-bold">OO대학교</h3>
            <p class="text-md text-gray-600">컴퓨터공학과 | 2018.03 - 2022.02</p>
          </div>
        </section>

      </main>

    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const apiUrl = `${config.public.apiBase}/resume/skill`;
const { data: skill, pending, error } = useFetch(apiUrl);
alert(apiUrl)


onMounted(() => {
})

</script>

<style scoped>
div {
  background-color: #f4f4f4;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
}
</style>
