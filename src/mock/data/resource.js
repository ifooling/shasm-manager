import Mock from 'mockjs'

const StandardData = Mock.mock({
    'data|8': [
        {
            'name|+1': [
                '智能底图',
                '三维场景',
                '矢量数据服务',
                '影像数据服务',
                '三维数据服务',
                '时态数据服务',
                'OGC',
                '其他'
            ],
            'children|1-8': [{
                name() {
                    return Mock.Random.cname()
                },
                icon() {
                    return Mock.Random.image('150x150', Mock.Random.hex(), Mock.Random.cname())
                }
            }]
        }
    ]
}).data

const OrganizationData = Mock.mock({
    'data|8': [
        {
            id: Mock.Random.guid(),
            'name|+1': [
                '国土资源',
                '地质灾害',
                '矿产资源',
                '行政区划',
                '教育',
                '地理设施',
                '公共服务',
                '其他'
            ],
            'children|1-8': [{
                name: Mock.mock('@cname'),
                icon: Mock.Random.image('150x150')
            }]
        }
    ]
}).data

export { StandardData, OrganizationData }
