/**
 * @file 项目更新依赖包模块的命令行执行
 * @author errorrik[errorrik@gmail.com]
 */


/**
 * 命令行配置项
 *
 * @inner
 * @type {Object}
 */
var cli = {};

/**
 * 命令名称
 *
 * @type {string}
 */
cli.command = 'update';

/**
 * 命令描述信息
 *
 * @type {string}
 */
cli.description = '更新依赖包';

/**
 * 命令选项信息
 *
 * @type {Array}
 */
cli.options = [ 'reserve-older' ];

/**
 * 模块命令行运行入口
 * 
 * @param {Array} args 命令运行参数
 * @param {Object} opts 命令运行选项
 */
cli.main = function ( args, opts ) {
    var name = args[ 0 ];
    require( 'edp-package' ).update(
        name,
        process.cwd(),
        opts[ 'reserve-older' ]
    );
};

/**
 * 命令行配置项
 *
 * @type {Object}
 */
exports.cli = cli;
