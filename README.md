# ionic-angular-boilerplate

## Android

```shell
# 初始化安卓项目
cap add android
# 同步安卓项目
cap sync android
# 编译安卓项目
cap build android
```

生成签名

```shell
keytool -genkey -alias app -keyalg RSA -keysize 2048 -validity 36500 -keystore app.jks -storetype JKS
```
