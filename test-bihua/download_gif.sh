#!/bin/bash

# 汉字列表
characters="开、土、中、上、天、禾、人、尺、头、下、虫、把、口、五、子、水、你、买、山、牙、长、比、那、课、凰、专、凹、四、西、小、可、了、手、我、去、东、心、女、力、月、儿、巴、几、马、鸟、没、仍、及、鼎、凸"

# 创建gifs目录
mkdir -p gifs

# 将汉字列表转换为数组
IFS='、' read -ra chars <<< "$characters"

# 遍历每个汉字并下载对应的GIF图片
for char in "${chars[@]}"; do
    echo "正在下载 $char 的笔画GIF..."
    curl -o "gifs/${char}.gif" "https://www.hanzipi.com/pic/gif/${char}.gif"
    
    # 检查下载是否成功
    if [ $? -eq 0 ]; then
        echo "成功下载 $char.gif"
    else
        echo "下载 $char.gif 失败"
    fi
    
    # 添加延迟以避免过于频繁的请求
    sleep 1
done

echo "所有汉字笔画GIF下载完成！"