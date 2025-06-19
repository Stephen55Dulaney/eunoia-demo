import pika
import json

RABBITMQ_HOST = 'localhost'

# Send a message to a queue
def send_message(queue, message):
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=RABBITMQ_HOST))
    channel = connection.channel()
    channel.queue_declare(queue=queue, durable=True)
    channel.basic_publish(
        exchange='',
        routing_key=queue,
        body=json.dumps(message),
        properties=pika.BasicProperties(delivery_mode=2)  # make message persistent
    )
    connection.close()

# Get all messages from a queue (for demo: consume and return all, then requeue if needed)
def get_messages(queue, max_messages=10):
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=RABBITMQ_HOST))
    channel = connection.channel()
    channel.queue_declare(queue=queue, durable=True)
    messages = []
    for _ in range(max_messages):
        method_frame, header_frame, body = channel.basic_get(queue=queue, auto_ack=True)
        if method_frame:
            messages.append(json.loads(body))
        else:
            break
    connection.close()
    return messages 