export const sendMsg = async (req, res) => {
    try {
        const { msg } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let convo = await Conversation.findOne({
            participants: {
                $all: {senderId, receiverId},
            }
        })

        if (!convo) {
            convo = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMsg =  new Message({
            senderId,
            receiverId,
            msg,
        })

        if (newMsg) {
            convo.messages.push(newMsg._id);
        }

        res.status(201).json(newMsg);

        // await convo.save();
        // await newMsg.save();

        await Promise.all([convo.save(), newMsg.save()]);

    } catch {
        
        console.log("Error in sendMsg controller", error.message);
        res.status(500).json({
            error: "internal server error"
        })
    }
}