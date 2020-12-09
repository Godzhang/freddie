<template>
  <div id="app">
    <div class="search-input">
      <button>搜素</button>
      <input
        type="text"
        placeholder="搜索歌曲"
        v-model="searchWord"
        @input="handleToSuggest"
        @keyup.enter="handleToList(searchWord)"
      />
      <button v-if="searchType !== 1" @click="handleToClose">关闭</button>
    </div>
    <template v-if="searchType === 1">
      <div class="search-history">
        <div class="search-history-head">
          <span>历史记录</span>
          <button @click="handleToClear">删除</button>
        </div>
        <div class="search-history-list">
          <div
            v-for="(item, index) in searchHistory"
            :key="index"
            @click="handleToList(item)"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="search-hot">
        <div class="search-hot-head">热歌榜</div>
        <div
          class="search-hot-item"
          v-for="(item, index) in searchHot"
          :key="index"
        >
          <div class="search-hot-top">{{ index + 1 }}</div>
          <div class="search-hot-word">
            <div>
              {{ item.searchWord
              }}<img v-if="item.iconUrl" :src="item.iconUrl" alt="" />
            </div>
            <div>{{ item.content }}</div>
          </div>
          <span class="search-hot-count">{{ item.score }}</span>
        </div>
      </div>
    </template>
    <template v-else-if="searchType === 2">
      <div class="search-result">
        <div
          class="search-result-item"
          v-for="(item, index) in searchList"
          :key="index"
        >
          <div class="search-result-word">
            <div>{{ item.name }}</div>
            <div>{{ item.artists[0].name }}-{{ item.album.name }}</div>
          </div>
          <button>播放</button>
        </div>
      </div>
    </template>
    <template v-else-if="searchType === 3">
      <div class="search-suggest">
        <div class="search-suggest-head">搜索'{{ searchWord }}'</div>
        <div
          class="search-suggest-item"
          v-for="(item, index) in searchSuggest"
          :key="index"
          @click="handleToList(item.keyword)"
        >
          <button>搜索</button>{{ item.keyword }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import {
  reactive,
  ref,
  toRefs,
  computed,
  watch,
  watchEffect,
  onMounted,
  defineComponent,
} from "@vue/composition-api";
import {
  searchHot as sh,
  searchSuggest as ss,
  searchList as sl,
  searchHistory as shis,
} from "./data";

export default defineComponent({
  name: "App",
  setup(props, context) {
    const searchType = ref(1);
    const searchWord = ref("");
    const { searchHot } = useSearchHot();
    const { searchSuggest, handleToSuggest } = useSearchSuggest(
      searchType,
      searchWord
    );
    const { searchHistory, handleToClear, setToHistory } = useSearchHistory();
    const { searchList, handleToList, handleToClose } = useSearchList(
      searchType,
      searchWord,
      function(word) {
        setToHistory(word);
      }
    );

    return {
      searchType,
      searchWord,
      searchSuggest,
      searchHot,
      searchList,
      searchHistory,
      handleToList,
      handleToClose,
      handleToSuggest,
      handleToClear,
    };
  },
});
function useSearchHot() {
  const state = reactive({
    searchHot: [],
  });

  onMounted(() => {
    setTimeout(() => {
      state.searchHot = sh;
    }, 1000);
  });

  return toRefs(state);
}

function useSearchSuggest(searchType, searchWord) {
  const state = reactive({
    searchSuggest: [],
  });
  const { searchSuggest } = toRefs(state);
  const handleToSuggest = () => {
    if (!searchWord.value) {
      searchType.value = 1;
      return;
    }
    setTimeout(() => {
      state.searchSuggest = ss;
      searchType.value = 3;
    }, 500);
  };
  return { searchSuggest, handleToSuggest };
}

function useSearchList(searchType, searchWord, callback) {
  const state = reactive({
    searchList: [],
  });
  const { searchList } = toRefs(state);

  const handleToClose = () => {
    searchType.value = 1;
    searchWord.value = "";
  };

  const handleToList = (word) => {
    searchWord.value = word;
    callback(word);

    setTimeout(() => {
      state.searchList = sl;
      searchType.value = 2;
    }, 500);
  };

  return { searchList, handleToList, handleToClose };
}

function useSearchHistory() {
  const state = reactive({
    searchHistory: [],
  });
  const { searchHistory } = toRefs(state);

  const handleToClear = () => {
    removeStorage({
      key: "searchHistory",
      success: () => {
        state.searchHistory = [];
      },
    });
  };

  const setToHistory = (word) => {
    state.searchHistory.unshift(word);
    state.searchHistory = [...new Set(state.searchHistory)];
    if (state.searchHistory.length > 10) {
      state.searchHistory.length = 10;
    }
    setStorage({
      key: "searchHistory",
      data: state.searchHistory,
    });
  };

  onMounted(() => {
    getStorage({
      key: "searchHistory",
      success: (arr) => {
        state.searchHistory = arr || [];
      },
    });
  });

  return { searchHistory, handleToClear, setToHistory };
}

function setStorage({ key, data }) {
  localStorage.setItem(key, JSON.stringify(data));
}
function getStorage({ key, success }) {
  const data = localStorage.getItem(key);
  success(JSON.parse(data));
}
function removeStorage({ key, success }) {
  localStorage.removeItem(key);
  success();
}
</script>

<style>
.search-input {
  display: flex;
  align-items: center;
  height: 35px;
  margin: 35px 15px 25px 15px;
  background-color: #f7f7f7;
  border-radius: 25px;
}
.search-input i {
  margin: 0 13px;
}
.search-input input {
  flex: 1;
  font-size: 14px;
  border: none;
  background: #f7f7f7;
  outline: none;
}
.search-history {
  margin: 0 15px;
  font-size: 14px;
}
.search-history-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
}
.search-history-list {
  display: flex;
  flex-wrap: wrap;
}
.search-history-list div {
  padding: 8px 14px;
  border-radius: 20px;
  margin-right: 15px;
  margin-bottom: 15px;
  background: #f7f7f7;
}
.search-hot {
  margin: 0 15px;
  font-size: 14px;
}
.search-hot-head {
  margin-bottom: 18px;
}
.search-hot-item {
  display: flex;
  align-items: center;
  margin-bottom: 29px;
}
.search-hot-top {
  color: #fb2222;
  width: 30px;
  margin-left: 4px;
}
.search-hot-word {
  flex: 1;
}
.search-hot-word div:nth-child(1) {
  font-size: 16px;
  color: black;
}
.search-hot-word div:nth-child(2) {
  font-size: 12px;
  color: #878787;
}
.search-hot-word img {
  height: 12px;
}
.search-hot-count {
  color: #878787;
}
.search-result {
  border-top: 1px solid #e4e4e4;
  padding: 15px;
}
.search-result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #e4e4e4;
}
.search-result-word div:nth-child(1) {
  font-size: 16px;
  color: #235790;
  margin-bottom: 6px;
}
.search-result-word div:nth-child(2) {
  font-size: 14px;
  color: #898989;
}
.search-result-item i {
  font-size: 30px;
  color: #878787;
}
.search-suggest {
  border-top: 1px solid #e4e4e4;
  padding: 15px;
  font-size: 14px;
}
.search-suggest-head {
  color: #4574a5;
  margin-bottom: 37px;
}
.search-suggest-item {
  color: #5d5d5d;
  margin-bottom: 37px;
}
.search-suggest-item i {
  color: #bdbdbd;
  margin-right: 14px;
  position: relative;
  top: 1px;
}
</style>
