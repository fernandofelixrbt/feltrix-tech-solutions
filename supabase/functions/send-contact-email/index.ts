
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  nome: string;
  email: string;
  empresa?: string;
  telefone?: string;
  mensagem?: string;
  tipo: string; // 'contato', 'orcamento', 'visita'
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Contact email function called");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nome, email, empresa, telefone, mensagem, tipo }: ContactRequest = await req.json();

    console.log("Processing contact request:", { nome, email, tipo });

    let subject = "";
    let content = "";

    switch (tipo) {
      case "orcamento":
        subject = "Nova Solicitação de Orçamento - Feltrix";
        content = `
          <h2>Nova Solicitação de Orçamento</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${empresa ? `<p><strong>Empresa:</strong> ${empresa}</p>` : ''}
          ${telefone ? `<p><strong>Telefone:</strong> ${telefone}</p>` : ''}
          ${mensagem ? `<p><strong>Mensagem:</strong> ${mensagem}</p>` : ''}
          <p><strong>Tipo:</strong> Solicitação de Orçamento</p>
          <hr>
          <p><em>Enviado através do site Feltrix</em></p>
        `;
        break;
      case "visita":
        subject = "Nova Solicitação de Visita Comercial - Feltrix";
        content = `
          <h2>Nova Solicitação de Visita Comercial</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${empresa ? `<p><strong>Empresa:</strong> ${empresa}</p>` : ''}
          ${telefone ? `<p><strong>Telefone:</strong> ${telefone}</p>` : ''}
          ${mensagem ? `<p><strong>Mensagem:</strong> ${mensagem}</p>` : ''}
          <p><strong>Tipo:</strong> Solicitação de Visita Comercial</p>
          <hr>
          <p><em>Enviado através do site Feltrix</em></p>
        `;
        break;
      default:
        subject = "Nova Mensagem de Contato - Feltrix";
        content = `
          <h2>Nova Mensagem de Contato</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${empresa ? `<p><strong>Empresa:</strong> ${empresa}</p>` : ''}
          ${telefone ? `<p><strong>Telefone:</strong> ${telefone}</p>` : ''}
          ${mensagem ? `<p><strong>Mensagem:</strong> ${mensagem}</p>` : ''}
          <hr>
          <p><em>Enviado através do site Feltrix</em></p>
        `;
    }

    const emailResponse = await resend.emails.send({
      from: "Feltrix Website <noreply@resend.dev>",
      to: ["contato@feltrix.com.br"],
      subject: subject,
      html: content,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, emailId: emailResponse.data?.id }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
