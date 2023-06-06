import sendgrid from '@sendgrid/mail'
import { NextRequest, NextResponse } from 'next/server'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '')

interface RequestBody {
  email: string
  subject: string
  name: string
  message: string
}

const POST = async (request: NextRequest) => {
  try {
    const res: RequestBody = await request.json()
    await sendgrid.send({
      to: 'bulaybulay.rielj@gmail.com',
      from: 'bulaybulay.rielj@gmail.com',
      subject: `[Lead from website] : ${res.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h3>You've got a new mail from ${res.name}, their email is: ✉️${res.email} </h3>
                <div style="font-size: 16px;">
                  <p>Message:</p>
                  <p>${res.message}</p>
                  <br>
                </div>
              </div>
        </div>
      </body>
      </html>`,
    })
  } catch (error: any) {
    console.log({ error }, error?.message, error?.response?.body)
    return NextResponse.json(
      { error: error?.message || 'error' },
      { status: error?.statusCode || 500 }
    )
  }

  return NextResponse.json({ error: '' }, { status: 200 })
}

export { POST }
