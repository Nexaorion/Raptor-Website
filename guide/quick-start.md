# 快速上手 {#quick-start}

## 下载和运行 {#download-and-run}

### 前置准备 {#prerequisites}

Raptor 基于 Python 开发和编译而成，支持在绝大多数环境上运行。

因此你需要以下条件才能运行Raptor：

- [Python](https://www.python.org/) 3.11 或更高版本
- 良好的网络环境（可以连接Sentry服务和大模型API）
- 可信的设备环境（风险设备可能无法正常运行）
- 至少200MB的磁盘空间

### 下载 {#download}

你可以直接从 [GitLab](https://git.nexaorion.cn/nexaorion/raptor-website/) 中下载已编译的exe文件（仅Windows）

下载完成后，直接运行 `raptor.exe` 即可。

### 配置 {#configuration}

在首次启动时，Raptor会向您征求政策许可。若您不同意这些许可，您将无法使用Raptor。

::: tip 保护隐私是我们的使命
Raptor TEAM向您保证我们不会向任何第三方机构提供您的**任何信息**。

我们是中国大陆的开发团队，数据中心位于中国大陆境内和中国香港地区。我们将严格遵循《隐私协议》和《跨境数据传输协议》合规处理并利用您的信息。
:::

同意许可后，我们将询问您一些**有关功能的基本配置信息**（如API接口、API Key等）。

```sh
$ 请输入OpenAI API Key（以sk-开头，输入skip跳过）：
$ 请输入OpenAI API地址（如https://api.openai.com/v1）：
```

有关 GZCTF Platform 的配置已被归纳于 “平台设置” 中，请在初始化完成后手动设置。

在一切设置完成后，Raptor将在 `config` 目录下生成 `profile.json` 文件。它的完整结构如下：

```json
{
    "first_launch": true,
    "openai_api_key": "secret_key",  // OpenAI API Key
    "openai_api_base": "api_address",  // OpenAI API地址（镜像源）
    "gzctf_username": "username",  // GZCTF平台用户名
    "gzctf_password": "password",  // GZCTF平台密码
    "gzctf_platform_url": "platform_url",  // GZCTF平台地址
    "language": "zh"  // 你的语言设置
}
```

::: details 如果没有填写大模型API相关设置
如果您在首次启动Raptor时没有填写API相关设置或API连通校验不通过，Raptor将无法使用AI相关功能。此时，`profile.json` 文件中的 `openai_api_key` 和 `openai_api_base` 字段将被设置为 `null` 。

您可以在任何时候手动修改 `config/profile.json` 文件中的API相关设置。或者在 ”AI设置“ 中手动设置。
:::

::: warning 注意
为了追踪Raptor不可避免的一些运行错误，在您使用Raptor的**与AI相关功能且发生错误事件**时，我们会收集您的 `openapi_api_base` 字段到 Sentry 平台中。

我们不会收集任何与您相关的任何隐私、有关利益的信息，也不会将您的 `openapi_api_base` 字段用于任何其他非用于技术修复的用途。我们的技术团队永远不会远程操控计算机调用您的API用于测试用途。

请放心，您的 `openai_api_key` 字段将被本地风控程式安全保护，**不会被上传到任何与Raptor有关的服务器**。
:::