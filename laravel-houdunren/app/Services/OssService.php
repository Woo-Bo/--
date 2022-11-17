<?php

namespace App\Services;

use AlibabaCloud\SDK\Dysmsapi\V20170525\Dysmsapi;
use Darabonba\OpenApi\Models\Config;
use AlibabaCloud\SDK\Dysmsapi\V20170525\Models\SendSmsRequest;
use AlibabaCloud\Tea\Utils\Utils\RuntimeOptions;
use OSS\OssClient;
use Spatie\Image\Image;
use Spatie\Image\Manipulations;

class OssService
{
    public function client()
    {
        return new OssClient(config('hd.aliyun.aliyun_key'), config('hd.aliyun.aliyun_secret'), 'oss-cn-hangzhou.aliyuncs.com');
    }

    public function image($file, $width = 800, $heigh = 800, $fit = Manipulations::FIT_CONTAIN)
    {
        $filePath = storage_path('app/' .  $file->store('image'));
        Image::load($filePath)->fit($fit, $width, $heigh)->save();
        $object = date("Ym") . '/' . basename($filePath);
        $res = $this->client()->uploadFile(config('hd.aliyun.aliyun_oss_bucket'), $object, $filePath);
        @unlink($filePath);
        return $res['info']['url'];
    }
}
