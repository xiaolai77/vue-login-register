export let localSto={
            set: function (key, value) {
                localStorage[key] = value;
            },        //读取单个属性
            get: function (key, defaultValue) {
                return localStorage[key] || defaultValue;
            },        //存储对象，以JSON格式存储
            setObject: function (key, value) {
                localStorage[key] = JSON.stringify(value);//将对象以字符串保存
            },        //读取对象
            getObject: function (key) {
				return JSON.parse(localStorage[key] || null);//获取字符串并解析成对象
				 
            } 
}

            