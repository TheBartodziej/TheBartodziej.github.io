FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY ./ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

ENV PORT=3000

EXPOSE 3000

CMD ["sh", "-c", "envsubst '$$PORT' < /etc/nginx/conf.d/default.conf > /tmp/default.conf && mv /tmp/default.conf /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
