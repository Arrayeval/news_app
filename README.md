# news_app
React-native编写的网易新闻app demo,学习为目的

### 文章学习
```
> * https://bbs.reactnative.cn/topic/10/%E5%9C%A8windows%E4%B8%8B%E6%90%AD%E5%BB%BAreact-native-android%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/2
> * https://www.jianshu.com/p/505965377ac6
  http://www.cnblogs.com/gaosheng-221/p/6954434.html
```

## 开发问题总结，以及解决
### Unable to load script from assets 'index.android.bundle'.解决方案
```
https://blog.csdn.net/highboys/article/details/78513530

npm add @babel/runtime
npm install

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle  --assets-dest android/app/src/main/res/
```
### 打包apk第三方库SDK更新不及时，导致失败：
```
demo01【Execution failed for task ':react-native-version-number:verifyReleaseResources'】
https://blog.csdn.net/klo220/article/details/83380657
```
