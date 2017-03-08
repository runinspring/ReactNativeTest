import React, {
    NetInfo
} from 'react-native';
/**
 * 初始化注册方法
 */
const register = () => {
    //实际应用中应该用回调方法来监听数据改变
    NetInfo.addEventListener('change', (stats) => {NET_TYPE = stats;});
    NetInfo.isConnected.addEventListener('change', (stats) => { NET_CONNECTED = stats; });
    console.log('NetInfo:',NetInfo)

}
/**网络类型 
 * none - 设备处于离线状态。
 * wifi - 设备处于联网状态且通过wifi链接，或者是一个iOS的模拟器。
 * cell - 设备是通过Edge、3G、WiMax或是LTE网络联网的。
 * unknown - 发生错误，网络状况不可知
*/
var NET_TYPE = 'A';
/**
 * 网络是否链接了
 */
var NET_CONNECTED = '';

/***
 * 检查网络链接状态
 * @param callback
 */
const checkNetworkConnected = (callback) => {
    NetInfo.isConnected.fetch().done(
        (isConnected) => {
            callback(isConnected);
        }
    );
}

/**
 * 获取网络的所有数据
 */
const getNetInfo=()=>{
    return {
        netType:NET_TYPE,
        connected:NET_CONNECTED,
    };
}


export default {
    checkNetworkConnected,
    register,
    getNetInfo,
}
