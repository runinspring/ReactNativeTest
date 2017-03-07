# ReactNativeiOSTest

###不使用xcode启动的命令行
```
react-native run-ios
```
### 使用模拟器调试，动画很卡的解决办法
```
使用该命令行可以修复
sudo sysctl -w kern.timer.coalescing_enabled=0
```