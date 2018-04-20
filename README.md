# microblog-server
微博客后台

## 获取记录列表
> GET: /api/record
### 返回示例
```json
{
    "msg": "record list",
    "data": [
        {
            "cate": [],
            "_id": "5ab8b1d54b4a3632483b1029",
            "amount": 10,
            "desc": "breakfast",
            "type1": "吃饭",
            "type2": "早餐",
            "create_time": 1522053589,
            "__v": 0
        },
        {
            "cate": [
                "吃饭",
                "早餐"
            ],
            "_id": "5ab8c15497e8d605f8465a81",
            "amount": 10,
            "desc": "breakfast",
            "type1": "吃饭",
            "type2": "早餐",
            "create_time": 1522057556,
            "__v": 0
        }
    ]
}
```

## 新增记录
> POST:  /api/record
### 请求参数
 参数名| 必选| 类型| 说明 
 :---:|:---:|:---:|:---| 
amount | 是 | float | 金额
desc   | 否 | String| 描述
cate | 是 | Array | 类目
create_time | 是 | Int | 时间戳(秒)
### 请求示例
```json
{
	"amount":10,
	"desc":"breakfast",
	"cate":["早餐","晚餐"],
	"type1":"吃饭",
	"type2":"早餐",
	"create_time":{{$timestamp}}
	
}
```
### 返回示例
```
```

## 删除记录
> DELETE:  /api/record/{id}
### 请求参数
 参数名| 必选| 类型| 说明 
 :---:|:---:|:---:|:---| 
ids | 是 | array | 记录id数组

### 请求示例
| url后跟订单id删除一条记录，传一个数组删除多条记录
```json
{
	"ids":[1,2,3],
}
```
### 返回示例
```
```

